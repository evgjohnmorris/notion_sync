/**
 * Generated Tool: workspacesTool_0872
 * Domain: Workspaces
 * ID: 0872
 */
exports.workspacesTool_0872 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0872:', error);
    throw error;
  }
};
