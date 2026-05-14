/**
 * Generated Tool: workspacesTool_0825
 * Domain: Workspaces
 * ID: 0825
 */
exports.workspacesTool_0825 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0825:', error);
    throw error;
  }
};
