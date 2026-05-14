/**
 * Generated Tool: workspacesTool_0482
 * Domain: Workspaces
 * ID: 0482
 */
exports.workspacesTool_0482 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0482:', error);
    throw error;
  }
};
