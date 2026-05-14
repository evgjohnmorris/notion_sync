/**
 * Generated Tool: workspacesTool_0331
 * Domain: Workspaces
 * ID: 0331
 */
exports.workspacesTool_0331 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0331:', error);
    throw error;
  }
};
