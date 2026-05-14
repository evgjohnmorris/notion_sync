/**
 * Generated Tool: databasesTool_0890
 * Domain: Databases
 * ID: 0890
 */
exports.databasesTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0890:', error);
    throw error;
  }
};
