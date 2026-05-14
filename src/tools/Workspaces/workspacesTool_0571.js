/**
 * Generated Tool: workspacesTool_0571
 * Domain: Workspaces
 * ID: 0571
 */
exports.workspacesTool_0571 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0571:', error);
    throw error;
  }
};
