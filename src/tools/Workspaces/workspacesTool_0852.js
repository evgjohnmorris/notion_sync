/**
 * Generated Tool: workspacesTool_0852
 * Domain: Workspaces
 * ID: 0852
 */
exports.workspacesTool_0852 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0852:', error);
    throw error;
  }
};
