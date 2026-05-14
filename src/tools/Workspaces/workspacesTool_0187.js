/**
 * Generated Tool: workspacesTool_0187
 * Domain: Workspaces
 * ID: 0187
 */
exports.workspacesTool_0187 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0187:', error);
    throw error;
  }
};
