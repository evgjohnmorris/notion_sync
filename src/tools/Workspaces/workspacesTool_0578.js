/**
 * Generated Tool: workspacesTool_0578
 * Domain: Workspaces
 * ID: 0578
 */
exports.workspacesTool_0578 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0578:', error);
    throw error;
  }
};
