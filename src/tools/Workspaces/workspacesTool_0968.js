/**
 * Generated Tool: workspacesTool_0968
 * Domain: Workspaces
 * ID: 0968
 */
exports.workspacesTool_0968 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0968:', error);
    throw error;
  }
};
