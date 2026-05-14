/**
 * Generated Tool: workspacesTool_0263
 * Domain: Workspaces
 * ID: 0263
 */
exports.workspacesTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0263:', error);
    throw error;
  }
};
