/**
 * Generated Tool: workspacesTool_0572
 * Domain: Workspaces
 * ID: 0572
 */
exports.workspacesTool_0572 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0572:', error);
    throw error;
  }
};
