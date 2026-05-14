/**
 * Generated Tool: workspacesTool_0984
 * Domain: Workspaces
 * ID: 0984
 */
exports.workspacesTool_0984 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0984:', error);
    throw error;
  }
};
