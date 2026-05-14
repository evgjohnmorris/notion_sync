/**
 * Generated Tool: workspacesTool_0384
 * Domain: Workspaces
 * ID: 0384
 */
exports.workspacesTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0384:', error);
    throw error;
  }
};
