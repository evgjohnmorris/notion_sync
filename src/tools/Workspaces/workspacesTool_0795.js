/**
 * Generated Tool: workspacesTool_0795
 * Domain: Workspaces
 * ID: 0795
 */
exports.workspacesTool_0795 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0795:', error);
    throw error;
  }
};
