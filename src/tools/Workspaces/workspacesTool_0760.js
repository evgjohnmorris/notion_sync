/**
 * Generated Tool: workspacesTool_0760
 * Domain: Workspaces
 * ID: 0760
 */
exports.workspacesTool_0760 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0760:', error);
    throw error;
  }
};
