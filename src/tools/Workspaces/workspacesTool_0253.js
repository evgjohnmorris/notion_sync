/**
 * Generated Tool: workspacesTool_0253
 * Domain: Workspaces
 * ID: 0253
 */
exports.workspacesTool_0253 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0253:', error);
    throw error;
  }
};
