/**
 * Generated Tool: workspacesTool_0178
 * Domain: Workspaces
 * ID: 0178
 */
exports.workspacesTool_0178 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0178:', error);
    throw error;
  }
};
