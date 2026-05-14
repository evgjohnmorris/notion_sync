/**
 * Generated Tool: workspacesTool_0080
 * Domain: Workspaces
 * ID: 0080
 */
exports.workspacesTool_0080 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0080:', error);
    throw error;
  }
};
