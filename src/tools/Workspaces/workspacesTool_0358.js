/**
 * Generated Tool: workspacesTool_0358
 * Domain: Workspaces
 * ID: 0358
 */
exports.workspacesTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0358:', error);
    throw error;
  }
};
