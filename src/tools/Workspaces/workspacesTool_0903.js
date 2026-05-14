/**
 * Generated Tool: workspacesTool_0903
 * Domain: Workspaces
 * ID: 0903
 */
exports.workspacesTool_0903 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0903:', error);
    throw error;
  }
};
