/**
 * Generated Tool: workspacesTool_0191
 * Domain: Workspaces
 * ID: 0191
 */
exports.workspacesTool_0191 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0191:', error);
    throw error;
  }
};
