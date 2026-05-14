/**
 * Generated Tool: workspacesTool_0952
 * Domain: Workspaces
 * ID: 0952
 */
exports.workspacesTool_0952 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0952:', error);
    throw error;
  }
};
