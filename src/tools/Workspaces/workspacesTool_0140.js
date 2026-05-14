/**
 * Generated Tool: workspacesTool_0140
 * Domain: Workspaces
 * ID: 0140
 */
exports.workspacesTool_0140 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0140:', error);
    throw error;
  }
};
