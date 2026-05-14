/**
 * Generated Tool: workspacesTool_0432
 * Domain: Workspaces
 * ID: 0432
 */
exports.workspacesTool_0432 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0432:', error);
    throw error;
  }
};
