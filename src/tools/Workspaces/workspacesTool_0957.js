/**
 * Generated Tool: workspacesTool_0957
 * Domain: Workspaces
 * ID: 0957
 */
exports.workspacesTool_0957 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0957:', error);
    throw error;
  }
};
