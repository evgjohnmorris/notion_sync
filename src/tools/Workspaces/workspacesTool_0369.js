/**
 * Generated Tool: workspacesTool_0369
 * Domain: Workspaces
 * ID: 0369
 */
exports.workspacesTool_0369 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0369:', error);
    throw error;
  }
};
