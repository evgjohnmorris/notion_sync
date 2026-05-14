/**
 * Generated Tool: workspacesTool_0370
 * Domain: Workspaces
 * ID: 0370
 */
exports.workspacesTool_0370 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0370:', error);
    throw error;
  }
};
