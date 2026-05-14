/**
 * Generated Tool: databasesTool_0657
 * Domain: Databases
 * ID: 0657
 */
exports.databasesTool_0657 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0657:', error);
    throw error;
  }
};
