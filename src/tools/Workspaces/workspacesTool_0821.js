/**
 * Generated Tool: workspacesTool_0821
 * Domain: Workspaces
 * ID: 0821
 */
exports.workspacesTool_0821 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0821:', error);
    throw error;
  }
};
