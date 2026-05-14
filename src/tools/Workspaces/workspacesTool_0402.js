/**
 * Generated Tool: workspacesTool_0402
 * Domain: Workspaces
 * ID: 0402
 */
exports.workspacesTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0402:', error);
    throw error;
  }
};
