/**
 * Generated Tool: databasesTool_0786
 * Domain: Databases
 * ID: 0786
 */
exports.databasesTool_0786 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.databases.query(params);
    return response;
  } catch (error) {
    console.error('Error in databasesTool_0786:', error);
    throw error;
  }
};
