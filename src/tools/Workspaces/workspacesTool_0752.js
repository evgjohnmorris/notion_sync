/**
 * Generated Tool: workspacesTool_0752
 * Domain: Workspaces
 * ID: 0752
 */
exports.workspacesTool_0752 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0752:', error);
    throw error;
  }
};
