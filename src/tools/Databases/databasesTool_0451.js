/**
 * Generated Tool: databasesTool_0451
 * Domain: Databases
 * ID: 0451
 */
exports.databasesTool_0451 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0451:', error);
    throw error;
  }
};
