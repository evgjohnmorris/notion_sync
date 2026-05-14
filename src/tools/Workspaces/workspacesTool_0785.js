/**
 * Generated Tool: workspacesTool_0785
 * Domain: Workspaces
 * ID: 0785
 */
exports.workspacesTool_0785 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0785:', error);
    throw error;
  }
};
