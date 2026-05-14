/**
 * Generated Tool: workspacesTool_0818
 * Domain: Workspaces
 * ID: 0818
 */
exports.workspacesTool_0818 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0818:', error);
    throw error;
  }
};
