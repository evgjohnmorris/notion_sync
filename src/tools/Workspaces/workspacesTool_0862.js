/**
 * Generated Tool: workspacesTool_0862
 * Domain: Workspaces
 * ID: 0862
 */
exports.workspacesTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0862:', error);
    throw error;
  }
};
