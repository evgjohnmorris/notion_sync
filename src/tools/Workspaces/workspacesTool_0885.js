/**
 * Generated Tool: workspacesTool_0885
 * Domain: Workspaces
 * ID: 0885
 */
exports.workspacesTool_0885 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0885:', error);
    throw error;
  }
};
