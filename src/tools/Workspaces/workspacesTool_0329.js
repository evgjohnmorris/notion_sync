/**
 * Generated Tool: workspacesTool_0329
 * Domain: Workspaces
 * ID: 0329
 */
exports.workspacesTool_0329 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0329:', error);
    throw error;
  }
};
