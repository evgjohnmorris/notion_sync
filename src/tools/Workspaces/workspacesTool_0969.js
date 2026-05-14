/**
 * Generated Tool: workspacesTool_0969
 * Domain: Workspaces
 * ID: 0969
 */
exports.workspacesTool_0969 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0969:', error);
    throw error;
  }
};
