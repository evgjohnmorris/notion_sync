/**
 * Generated Tool: workspacesTool_0451
 * Domain: Workspaces
 * ID: 0451
 */
exports.workspacesTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0451:', error);
    throw error;
  }
};
