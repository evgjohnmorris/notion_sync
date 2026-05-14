/**
 * Generated Tool: workspacesTool_0509
 * Domain: Workspaces
 * ID: 0509
 */
exports.workspacesTool_0509 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0509:', error);
    throw error;
  }
};
