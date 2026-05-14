/**
 * Generated Tool: workspacesTool_0718
 * Domain: Workspaces
 * ID: 0718
 */
exports.workspacesTool_0718 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0718:', error);
    throw error;
  }
};
