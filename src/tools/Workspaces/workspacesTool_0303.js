/**
 * Generated Tool: workspacesTool_0303
 * Domain: Workspaces
 * ID: 0303
 */
exports.workspacesTool_0303 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0303:', error);
    throw error;
  }
};
