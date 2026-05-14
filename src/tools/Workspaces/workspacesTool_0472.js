/**
 * Generated Tool: workspacesTool_0472
 * Domain: Workspaces
 * ID: 0472
 */
exports.workspacesTool_0472 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0472:', error);
    throw error;
  }
};
