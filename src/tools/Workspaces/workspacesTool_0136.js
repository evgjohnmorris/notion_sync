/**
 * Generated Tool: workspacesTool_0136
 * Domain: Workspaces
 * ID: 0136
 */
exports.workspacesTool_0136 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0136:', error);
    throw error;
  }
};
