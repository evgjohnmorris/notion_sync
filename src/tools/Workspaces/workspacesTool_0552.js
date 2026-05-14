/**
 * Generated Tool: workspacesTool_0552
 * Domain: Workspaces
 * ID: 0552
 */
exports.workspacesTool_0552 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0552:', error);
    throw error;
  }
};
