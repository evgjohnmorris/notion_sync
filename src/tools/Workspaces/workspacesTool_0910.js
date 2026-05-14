/**
 * Generated Tool: workspacesTool_0910
 * Domain: Workspaces
 * ID: 0910
 */
exports.workspacesTool_0910 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0910:', error);
    throw error;
  }
};
