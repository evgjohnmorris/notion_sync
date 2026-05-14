/**
 * Generated Tool: workspacesTool_0908
 * Domain: Workspaces
 * ID: 0908
 */
exports.workspacesTool_0908 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0908:', error);
    throw error;
  }
};
