/**
 * Generated Tool: workspacesTool_0786
 * Domain: Workspaces
 * ID: 0786
 */
exports.workspacesTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0786:', error);
    throw error;
  }
};
