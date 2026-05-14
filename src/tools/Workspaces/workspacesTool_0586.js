/**
 * Generated Tool: workspacesTool_0586
 * Domain: Workspaces
 * ID: 0586
 */
exports.workspacesTool_0586 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0586:', error);
    throw error;
  }
};
