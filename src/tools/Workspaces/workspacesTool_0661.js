/**
 * Generated Tool: workspacesTool_0661
 * Domain: Workspaces
 * ID: 0661
 */
exports.workspacesTool_0661 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0661:', error);
    throw error;
  }
};
