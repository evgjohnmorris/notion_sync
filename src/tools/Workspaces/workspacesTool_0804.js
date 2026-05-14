/**
 * Generated Tool: workspacesTool_0804
 * Domain: Workspaces
 * ID: 0804
 */
exports.workspacesTool_0804 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0804:', error);
    throw error;
  }
};
