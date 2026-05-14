/**
 * Generated Tool: databasesTool_0402
 * Domain: Databases
 * ID: 0402
 */
exports.databasesTool_0402 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0402:', error);
    throw error;
  }
};
